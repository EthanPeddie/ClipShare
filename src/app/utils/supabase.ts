import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';

export const supabase = createClient(
  'https://hqchhrwmqrcpcqfzbvlf.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxY2hocndtcXJjcGNxZnpidmxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxODU0MzAsImV4cCI6MjAyOTc2MTQzMH0.bCPQO-mClSOUjmduUJrP5cXF-2dCAU4lZ8D74bPLEsU',
);
