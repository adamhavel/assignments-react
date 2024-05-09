import React, { createContext, useContext, PropsWithChildren } from "react";

const Env = createContext({
    apiUrl: undefined as string | undefined,
});

export const EnvProvider = ({ children }: PropsWithChildren) => {
    const { VITE_API_URL: apiUrl } = import.meta.env;

    return (
        <Env.Provider value={{ apiUrl }}>
            {children}
        </Env.Provider>
    );
};

export const useEnv = () => {
    const context = useContext(Env);

    if (context === null) {
        throw new Error("useEnv must be used within a EnvProvider");
    }

    return context;
};
