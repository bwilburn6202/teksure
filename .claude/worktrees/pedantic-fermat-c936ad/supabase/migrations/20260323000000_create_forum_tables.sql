-- Community Forum tables

-- Forum threads
CREATE TABLE public.forum_threads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT NOT NULL DEFAULT 'Anonymous',
  category TEXT NOT NULL DEFAULT 'general' CHECK (category IN ('general', 'wifi', 'passwords', 'devices', 'software')),
  reply_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Forum replies
CREATE TABLE public.forum_replies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  thread_id UUID NOT NULL REFERENCES public.forum_threads(id) ON DELETE CASCADE,
  body TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT NOT NULL DEFAULT 'Anonymous',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.forum_threads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_replies ENABLE ROW LEVEL SECURITY;

-- Threads: anyone can read
CREATE POLICY "Anyone can read forum threads"
  ON public.forum_threads FOR SELECT
  TO public
  USING (true);

-- Threads: authenticated users can post
CREATE POLICY "Authenticated users can create threads"
  ON public.forum_threads FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Threads: users can update their own
CREATE POLICY "Users can update own threads"
  ON public.forum_threads FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Threads: admins can delete any
CREATE POLICY "Admins can delete threads"
  ON public.forum_threads FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Replies: anyone can read
CREATE POLICY "Anyone can read forum replies"
  ON public.forum_replies FOR SELECT
  TO public
  USING (true);

-- Replies: authenticated users can post
CREATE POLICY "Authenticated users can create replies"
  ON public.forum_replies FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Replies: admins can delete any
CREATE POLICY "Admins can delete replies"
  ON public.forum_replies FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Auto-update updated_at on threads
CREATE OR REPLACE FUNCTION public.update_forum_threads_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER forum_threads_updated_at
  BEFORE UPDATE ON public.forum_threads
  FOR EACH ROW EXECUTE FUNCTION public.update_forum_threads_updated_at();

-- Auto-increment reply_count when a reply is added
CREATE OR REPLACE FUNCTION public.increment_thread_reply_count()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  UPDATE public.forum_threads
  SET reply_count = reply_count + 1, updated_at = now()
  WHERE id = NEW.thread_id;
  RETURN NEW;
END;
$$;

CREATE TRIGGER forum_reply_added
  AFTER INSERT ON public.forum_replies
  FOR EACH ROW EXECUTE FUNCTION public.increment_thread_reply_count();

-- Decrement reply_count when a reply is removed
CREATE OR REPLACE FUNCTION public.decrement_thread_reply_count()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  UPDATE public.forum_threads
  SET reply_count = GREATEST(reply_count - 1, 0)
  WHERE id = OLD.thread_id;
  RETURN OLD;
END;
$$;

CREATE TRIGGER forum_reply_removed
  AFTER DELETE ON public.forum_replies
  FOR EACH ROW EXECUTE FUNCTION public.decrement_thread_reply_count();

-- Seed a few starter threads so the forum isn't empty
INSERT INTO public.forum_threads (title, body, author_name, category) VALUES
(
  'Welcome to the TekSure Community!',
  'Hi everyone! This is the place to ask questions, share tips, and help each other out with technology. No question is too simple — we''re all here to learn. Feel free to introduce yourself below!',
  'TekSure Team',
  'general'
),
(
  'My Wi-Fi keeps dropping — any tips?',
  'My internet connection seems to drop every hour or so, especially in the evenings. I''ve tried restarting the router but it still happens. Has anyone else had this problem? I have a BT router and my laptop is about 3 years old.',
  'MargieFromBristol',
  'wifi'
),
(
  'Which password manager do you use?',
  'I finally decided to stop using the same password for everything (I know, I know!) and I want to try a password manager. Has anyone used LastPass or 1Password? Are they safe? Easy to use for someone who isn''t very techy?',
  'RetiredTeacher62',
  'passwords'
);
