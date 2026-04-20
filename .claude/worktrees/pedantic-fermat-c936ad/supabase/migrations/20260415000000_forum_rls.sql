-- Enable Row Level Security on forum tables
ALTER TABLE forum_threads ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_replies ENABLE ROW LEVEL SECURITY;

-- Read access for all users
CREATE POLICY read_all_threads ON forum_threads FOR SELECT USING (true);
CREATE POLICY read_all_replies ON forum_replies FOR SELECT USING (true);

-- Insert for authenticated users
CREATE POLICY insert_own_threads ON forum_threads FOR INSERT USING (auth.uid() = user_id);
CREATE POLICY insert_own_replies ON forum_replies FOR INSERT USING (auth.uid() = user_id);

-- Update and delete for own posts
CREATE POLICY update_own_threads ON forum_threads FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY update_own_replies ON forum_replies FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY delete_own_threads ON forum_threads FOR DELETE USING (auth.uid() = user_id);
CREATE POLICY delete_own_replies ON forum_replies FOR DELETE USING (auth.uid() = user_id);
