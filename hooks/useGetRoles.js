import { useState, useEffect } from 'react';
import { fetchRoles, fetchIndustries } from '../utils/supabaseHelpers';

const useGetRoles = () => {
  const [roles, setRoles] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [loadingRoles, setLoadingRoles] = useState(true);

  useEffect(() => {
    const getRolesAndIndustries = async () => {
      try {
        setLoadingRoles(true);
        const rolesData = await fetchRoles();
        const industriesData = await fetchIndustries();
        setRoles(rolesData);
        setIndustries(industriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoadingRoles(false);
      }
    };

    getRolesAndIndustries();
  }, []);

  return { roles, industries, loadingRoles };
};

export default useGetRoles;
