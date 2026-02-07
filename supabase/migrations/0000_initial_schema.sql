-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text,
  email text NOT NULL,
  company_url text,
  challenge text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anyone (public form submission)
CREATE POLICY "Allow public insert to leads"
  ON leads
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow reading only by authenticated users (dashboard view)
CREATE POLICY "Allow authenticated read access"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);
