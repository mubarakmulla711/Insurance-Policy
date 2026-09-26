from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from datetime import date

app = FastAPI(title="InsureSimplify API", description="Insurance Policy Management platform API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class InsurancePlan(BaseModel):
    id: str
    name: str
    type: str
    description: str
    monthly_premium: float
    coverage_amount: float
    features: List[str]
    popular: bool = False

class Policy(BaseModel):
    id: str
    holder_name: str
    plan_name: str
    type: str
    status: str
    start_date: date
    end_date: date
    premium: float
    coverage_amount: float

class ContactForm(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    message: str
    plan_interest: Optional[str] = None

# Sample Data
plans_db = [
    InsurancePlan(id="plan-1", name="Basic Health", type="Health", description="Essential health coverage.", monthly_premium=150.0, coverage_amount=50000.0, features=["Doctor visits", "Emergency care"], popular=True),
    InsurancePlan(id="plan-2", name="Comprehensive Life", type="Life", description="Full life insurance coverage.", monthly_premium=200.0, coverage_amount=500000.0, features=["Term life", "Whole life options"], popular=False),
    InsurancePlan(id="plan-3", name="Safe Auto", type="Auto", description="Reliable auto insurance.", monthly_premium=100.0, coverage_amount=30000.0, features=["Collision", "Liability"], popular=True),
    InsurancePlan(id="plan-4", name="Secure Home", type="Home", description="Protect your home and belongings.", monthly_premium=80.0, coverage_amount=250000.0, features=["Fire", "Theft", "Natural disasters"], popular=False),
    InsurancePlan(id="plan-5", name="Global Travel", type="Travel", description="Coverage for your trips abroad.", monthly_premium=30.0, coverage_amount=100000.0, features=["Medical emergencies", "Trip cancellation"], popular=False),
    InsurancePlan(id="plan-6", name="Business Pro", type="Business", description="Comprehensive coverage for businesses.", monthly_premium=300.0, coverage_amount=1000000.0, features=["Liability", "Property damage", "Employee benefits"], popular=True)
]

policies_db = [
    Policy(id="pol-1", holder_name="Alice Smith", plan_name="Basic Health", type="Health", status="Active", start_date=date(2023, 1, 1), end_date=date(2024, 1, 1), premium=150.0, coverage_amount=50000.0),
    Policy(id="pol-2", holder_name="Bob Jones", plan_name="Secure Home", type="Home", status="Pending", start_date=date(2023, 6, 15), end_date=date(2024, 6, 15), premium=80.0, coverage_amount=250000.0),
    Policy(id="pol-3", holder_name="Charlie Brown", plan_name="Safe Auto", type="Auto", status="Expired", start_date=date(2022, 5, 10), end_date=date(2023, 5, 10), premium=100.0, coverage_amount=30000.0),
    Policy(id="pol-4", holder_name="Diana Prince", plan_name="Comprehensive Life", type="Life", status="Active", start_date=date(2023, 3, 1), end_date=date(2043, 3, 1), premium=200.0, coverage_amount=500000.0),
    Policy(id="pol-5", holder_name="Eve Adams", plan_name="Global Travel", type="Travel", status="Active", start_date=date(2023, 11, 1), end_date=date(2023, 11, 30), premium=30.0, coverage_amount=100000.0)
]

@app.get("/")
def welcome():
    return {"message": "Welcome to the InsureSimplify API!"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}

@app.get("/api/policies", response_model=List[Policy])
def list_policies():
    return policies_db

@app.get("/api/policies/{policy_id}", response_model=Policy)
def get_policy(policy_id: str):
    policy = next((p for p in policies_db if p.id == policy_id), None)
    if policy is None:
        raise HTTPException(status_code=404, detail="Policy not found")
    return policy

@app.get("/api/plans", response_model=List[InsurancePlan])
def list_plans():
    return plans_db

@app.post("/api/contact")
def submit_contact(form: ContactForm):
    return {"status": "success", "message": f"Contact form from {form.name} received."}

@app.get("/api/stats")
def get_stats():
    return {
        "total_policies": len(policies_db),
        "total_plans": len(plans_db),
        "active_policies": len([p for p in policies_db if p.status == "Active"]),
        "total_coverage": sum(p.coverage_amount for p in policies_db)
    }
