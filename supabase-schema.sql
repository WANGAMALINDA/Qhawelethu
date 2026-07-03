-- Supabase schema and row level security configuration for Qhawelethu Wellness

create extension if not exists "pgcrypto";

-- Enquiries table -----------------------------------------------------------
create table if not exists enquiries (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz default now()
);

alter table enquiries enable row level security;

create policy "Allow anonymous insert enquiries" on enquiries
  for insert with check (auth.role() = 'anon');

create policy "Allow authenticated select enquiries" on enquiries
  for select using (auth.role() = 'authenticated');

create policy "Allow authenticated manage enquiries" on enquiries
  for update using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

create policy "Allow authenticated delete enquiries" on enquiries
  for delete using (auth.role() = 'authenticated');

-- Bookings table -----------------------------------------------------------
create table if not exists bookings (
  id uuid default gen_random_uuid() primary key,
  service text not null,
  booking_date date not null,
  time_slot text not null,
  full_name text not null,
  phone text,
  email text not null,
  note text,
  created_at timestamptz default now()
);

alter table bookings enable row level security;

create policy "Allow anonymous insert bookings" on bookings
  for insert with check (auth.role() = 'anon');

create policy "Allow authenticated select bookings" on bookings
  for select using (auth.role() = 'authenticated');

create policy "Allow authenticated manage bookings" on bookings
  for update using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

create policy "Allow authenticated delete bookings" on bookings
  for delete using (auth.role() = 'authenticated');

-- Protect data collection by preventing anonymous reads and enforcing authenticated management.
