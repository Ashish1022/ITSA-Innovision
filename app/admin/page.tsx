"use client"

import { api } from '@/convex/_generated/api';
import { useMutation } from 'convex/react';
import React, { useEffect } from 'react'

const AdminHome = () => {
  const store = useMutation(api.users.store);
  useEffect(() => {
    const storeUser = async () => {
      await store({});
    }
    storeUser();
  }, [store])
  return (
    <div>AdminHome</div>
  )
}

export default AdminHome