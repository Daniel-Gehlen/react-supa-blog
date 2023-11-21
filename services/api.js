import axios from 'axios';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Carrega as variáveis de ambiente
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const commonApiKey = process.env.COMMON_API_KEY;
const commonAuthorization = process.env.COMMON_AUTHORIZATION;

console.log('supabaseUrl:', supabaseUrl);
console.log('supabaseKey:', supabaseKey);
console.log('commonApiKey:', commonApiKey);
console.log('commonAuthorization:', commonAuthorization);

// Cria o cliente Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

// Configura a instância do Axios
export const api = axios.create({
  baseURL: 'https://excjncldkxfgkcjxttqp.supabase.co/rest/v1',
  headers: {
    'apikey': commonApiKey,
    'Authorization': `${commonAuthorization}`,
  },
});
