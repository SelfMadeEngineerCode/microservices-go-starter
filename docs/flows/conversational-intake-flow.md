# Conversational Intake Flow

## Goal
Capture a structured lost-item report through a natural language conversation.

## Flow
1. Passenger opens SmartFind web app.
2. Passenger chats with intake agent and describes the item.
3. Intake agent extracts structured fields (category, color, last known route/station/time).
4. Backend validates required fields.
5. Lost-item report is stored and assigned a tracking ID.
6. Matching pipeline is triggered.

## Outputs
- Structured lost-item report
- Tracking ID for passenger follow-up
