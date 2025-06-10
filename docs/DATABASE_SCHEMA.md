# Database Schema Design

## Overview
Think of our database structure like a building's blueprint. Just as a building needs a proper foundation and clear layout, our database needs a well-planned structure to support all the features we'll build.

## User Management (PostgreSQL)
```
Table: users
- id: UUID (Primary Key) [Like a unique plot number]
- email: String (Unique) [Contact information]
- password_hash: String [Security system]
- full_name: String
- company_name: String
- created_at: Timestamp
- last_login: Timestamp
- role: Enum ('admin', 'user', 'manager')

Table: user_settings
- user_id: UUID (Foreign Key) [References users]
- notification_preferences: JSON
- dashboard_layout: JSON
- timezone: String
```

## Platform Connections (PostgreSQL)
```
Table: platform_connections
- id: UUID (Primary Key)
- user_id: UUID (Foreign Key)
- platform_type: Enum ('google_analytics', 'facebook_ads', 'google_ads')
- credentials: JSON [Encrypted]
- status: Enum ('active', 'expired', 'invalid')
- last_sync: Timestamp

Table: connection_logs
- id: UUID (Primary Key)
- connection_id: UUID (Foreign Key)
- event_type: String
- status: String
- message: String
- timestamp: Timestamp
```

## Audit Data (MongoDB)
```
Collection: audit_reports
{
  _id: ObjectId,
  user_id: UUID,
  report_name: String,
  created_at: Timestamp,
  status: String,
  platforms: Array,
  metrics: {
    performance_score: Number,
    engagement_rate: Number,
    conversion_rate: Number,
    roi: Number
  },
  recommendations: Array,
  raw_data: Object
}

Collection: audit_metrics
{
  _id: ObjectId,
  report_id: ObjectId,
  platform: String,
  metric_type: String,
  value: Number,
  timestamp: Timestamp,
  comparison: {
    previous_value: Number,
    change_percentage: Number
  }
}
```

## Automation Settings (PostgreSQL)
```
Table: scheduled_audits
- id: UUID (Primary Key)
- user_id: UUID (Foreign Key)
- frequency: String ('daily', 'weekly', 'monthly')
- next_run: Timestamp
- platforms: Array
- notification_email: String
- active: Boolean

Table: audit_templates
- id: UUID (Primary Key)
- user_id: UUID (Foreign Key)
- name: String
- description: String
- metrics: Array
- platforms: Array
```

## Notifications (MongoDB)
```
Collection: notifications
{
  _id: ObjectId,
  user_id: UUID,
  type: String,
  message: String,
  read: Boolean,
  created_at: Timestamp,
  action_url: String
}
```

## Civil Engineering Analogies

### Foundation (Core Tables)
- `users` table = Foundation of the building
- `platform_connections` = Utility connections (electricity, water, etc.)
- `audit_reports` = Building floors and rooms

### Structural Elements
- Primary Keys = Load-bearing columns
- Foreign Keys = Structural connections between elements
- Indexes = Quick access points (like emergency exits)

### Maintenance Systems
- `connection_logs` = Maintenance logs
- `notifications` = Building management system
- `scheduled_audits` = Preventive maintenance schedule

## Data Flow (Like Building Systems)
1. User Authentication (Security System)
   - Login/Registration
   - Permission checks

2. Data Collection (Like Utility Meters)
   - Platform connections
   - Data gathering
   - Metrics calculation

3. Report Generation (Like Building Inspection)
   - Audit compilation
   - Performance analysis
   - Recommendations

4. Automation (Like Building Automation System)
   - Scheduled tasks
   - Notifications
   - Updates

## Security Considerations
- Encryption for sensitive data
- Regular backups
- Access control
- Audit logging

## Scaling Considerations
- Index optimization
- Partition strategy
- Backup strategy
- Performance monitoring

Would you like me to create any other planning documents before we start the development after June 7/8? 