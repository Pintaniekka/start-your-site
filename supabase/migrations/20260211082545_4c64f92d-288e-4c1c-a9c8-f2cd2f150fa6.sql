-- Make the images bucket public
UPDATE storage.buckets SET public = true WHERE id = 'images';

-- Allow public read access to images
CREATE POLICY "Public read access for images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'images');
