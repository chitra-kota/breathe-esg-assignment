# MODEL

## Data Model

Central entity: ESGRecord

Fields:
- source
- activity
- quantity
- unit
- scope
- status
- suspicious
- created_at

## Multi-tenancy
Supports enterprise-specific data segregation.

## Scope Categorization
- Scope 1: Fuel
- Scope 2: Electricity
- Scope 3: Travel

## Audit Trail
Tracks approval status for analyst review.