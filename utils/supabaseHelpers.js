import supabase from './supabase';

export const fetchRoles = async () => {
  try {
    let { data, error } = await supabase.from('roles').select('*');

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching roles:', error);
    return [];
  }
};

export const fetchIndustries = async () => {
  try {
    let { data, error } = await supabase.from('industries').select('*');

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching industries:', error);
    return [];
  }
};
