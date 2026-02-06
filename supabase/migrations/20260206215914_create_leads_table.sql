/*
  # Create Leads Table

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `name` (text, required) - Lead's full name
      - `email` (text, required) - Lead's email address
      - `company` (text, optional) - Company name
      - `website` (text, optional) - Company website
      - `message` (text, optional) - Additional details about their needs
      - `created_at` (timestamp) - When the lead was submitted
      
  2. Security
    - Enable RLS on `leads` table
    - Add policy for inserting leads (public access for form submissions)
    - Add policy for authenticated admin users to view leads

  3. Notes
    - This table stores lead information from the "Request an Automation Audit" form
    - Public insert access allows the landing page form to work without authentication
    - Only authenticated users can view the leads for privacy
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  website text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit leads"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);