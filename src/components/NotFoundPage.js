import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go home</Link>   {/* Client side routing to prevent a full page refresh */}
    </div>
);

export default NotFoundPage
