create table if not exists public.user_restaurant_records (
  user_id uuid not null references auth.users(id) on delete cascade,
  restaurant_id text not null,
  status text check (status is null or status in ('want', 'booked', 'visited', 'loved')),
  note text,
  updated_at timestamptz not null default now(),
  primary key (user_id, restaurant_id),
  check (status is not null or nullif(btrim(note), '') is not null)
);

alter table public.user_restaurant_records enable row level security;

create or replace function public.set_user_restaurant_records_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_user_restaurant_records_updated_at on public.user_restaurant_records;
create trigger set_user_restaurant_records_updated_at
before update on public.user_restaurant_records
for each row execute function public.set_user_restaurant_records_updated_at();

drop policy if exists "Users can read own restaurant records" on public.user_restaurant_records;
create policy "Users can read own restaurant records"
on public.user_restaurant_records
for select
to authenticated
using (user_id = auth.uid());

drop policy if exists "Users can insert own restaurant records" on public.user_restaurant_records;
create policy "Users can insert own restaurant records"
on public.user_restaurant_records
for insert
to authenticated
with check (user_id = auth.uid());

drop policy if exists "Users can update own restaurant records" on public.user_restaurant_records;
create policy "Users can update own restaurant records"
on public.user_restaurant_records
for update
to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

drop policy if exists "Users can delete own restaurant records" on public.user_restaurant_records;
create policy "Users can delete own restaurant records"
on public.user_restaurant_records
for delete
to authenticated
using (user_id = auth.uid());

grant select, insert, update, delete on public.user_restaurant_records to authenticated;
