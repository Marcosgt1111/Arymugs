import React from 'react';
import Header from '../components/Header';

const Page: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <h1>Welcome to My Page</h1>
                <p>This is a sample page.</p>
            </main>
        </>
    );
};

export default Page;
