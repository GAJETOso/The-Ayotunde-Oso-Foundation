# Admin Portal Guide

## Accessing the Admin Portal

URL: `https://ayotundeosofouncation.org/admin`

Access is restricted to users with the `admin` role in Clerk. To grant admin access:

1. Go to Clerk Dashboard → Users
2. Find the user by email
3. Click on the user → Edit public metadata
4. Set: `{ "role": "admin" }`
5. Save changes

The user must sign out and sign back in for the role to take effect.

## Admin Portal Sections

### Overview Dashboard (`/admin`)

Real-time overview of:
- Recent donations with status
- Pending volunteer applications
- Unread contact form submissions
- Newsletter subscriber count
- Quick action buttons

### Donations (`/admin/donations`)

- View all donations with filters (status, program, date range)
- Export donation data as CSV
- Issue manual receipts
- Mark donations as refunded
- View donor history

### Volunteers (`/admin/volunteers`)

- Review and approve/reject volunteer applications
- Assign volunteers to programs
- Track volunteer hours
- Send assignment notifications

### Events (`/admin/events`)

- Create and edit events
- Manage registrations
- Export attendee lists
- Send event reminders

### Articles (`/admin/articles`)

- Create, edit, and publish news articles and blog posts
- Set featured images, categories, and tags
- Schedule publication
- Manage article status (Draft/Published/Archived)

### Campaigns (`/admin/campaigns`)

- Create and manage fundraising campaigns
- Set goals and deadlines
- Track campaign progress
- Feature/unfeature campaigns

### Grant Applications (`/admin/grants`)

- Review submitted grant applications
- Change application status (Under Review / Approved / Rejected)
- Add internal reviewer notes
- Generate approval/rejection letter

### Contact Inbox (`/admin/contacts`)

- View all contact form submissions
- Filter by department, read status, date
- Mark as read/responded
- Assign to team members

### Newsletter (`/admin/newsletter`)

- View subscriber list and growth metrics
- Compose and send newsletter emails via Resend
- View delivery and open rate statistics
- Export subscriber list

### Settings (`/admin/settings`)

- Update impact statistics
- Manage program information
- Configure donation preset amounts
- Update KOMAI system prompt
- Manage API keys (view only — never stored in browser)

## Role Hierarchy

| Role | Access |
|------|--------|
| `user` | Dashboard only |
| `donor` | Dashboard + donation history |
| `volunteer` | Dashboard + volunteer portal |
| `staff` | Admin portal (limited — no settings) |
| `admin` | Full admin portal access |

## Security

- All admin routes are protected by Clerk middleware
- Role is verified server-side on each request via `requireRole('admin')`
- Admin pages do not expose API keys or secrets in the client
- All admin actions are logged with user ID and timestamp
- Rate limiting applies to all admin API endpoints

## Backup & Data Export

```bash
# Export full database backup (run on server)
pg_dump $DATABASE_URL > backup-$(date +%Y%m%d).sql

# Export donations as CSV
npx ts-node scripts/export-donations.ts
```
