import Header from '@/app/components/header';
import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard / new</Header>
      <h1>New companies</h1>
    </>
  );
}
