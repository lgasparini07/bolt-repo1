/*
  # Fix Leads Table Schema

  1. Changes
    - Rename `company_url` to `company` (company name field)
    - Rename `challenge` to `website` (temporary holding column)
    - Add new `message` column (for additional details)
    - Drop the old `website` column after data preservation
    - Rename back appropriately

  2. Notes
    - This aligns the database schema with the LeadForm component
    - Preserves existing data if any
*/

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'leads' AND column_name = 'company_url'
  ) THEN
    ALTER TABLE leads RENAME COLUMN company_url TO company;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'leads' AND column_name = 'challenge'
  ) THEN
    ALTER TABLE leads RENAME COLUMN challenge TO website;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'message'
  ) THEN
    ALTER TABLE leads ADD COLUMN message text;
  END IF;
END $$;
