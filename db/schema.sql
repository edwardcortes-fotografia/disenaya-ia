-- DiseñaYa V4.1 - esquema inicial
create table if not exists profiles (
  id uuid primary key,
  business_name text,
  phone text,
  city text,
  brand_color text default '#ff2f9e',
  created_at timestamptz default now()
);

create table if not exists campaigns (
  id uuid primary key,
  user_id uuid,
  title text not null,
  brief text,
  copy text,
  cta text,
  created_at timestamptz default now()
);
