import React from 'react';

import { RootNavigator } from './routes';
import { AuthContextProvider } from './contexts/auth-context';
import { TaskContextProvider } from './contexts/task-context';

export function App() {
    return (
        <AuthContextProvider>
            <TaskContextProvider>
                <RootNavigator />
            </TaskContextProvider>
        </AuthContextProvider>
    );
}
