import React from 'react';
import { Skeleton } from 'antd';

const LoadingData = () => (
    <>
        <section className="section-wrapper">
            <div className="container-fluid">
                <Skeleton active />
            </div>
        </section>
    </>
);

export default LoadingData;