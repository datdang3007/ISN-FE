// import React from "react";

// export type TUserAuthenticationState = {
//   email: string;
//   password: string;
// };

// export type TUserAuthenticationMethods = {
//   handleChangeTable?(property: TUserAuthenticationProperty, value: string): void;
//   login?(): void;
//   logout?(): void;
// };

// export type TUserAuthenticationProperty = keyof TUserAuthenticationState;

// export type TUserAuthenticationProps = TUserAuthenticationState &
//   TUserAuthenticationMethods;

// export type TUserAuthenticationProviderProps = TUserAuthenticationProps & {
//   children: React.ReactNode | React.ReactNode[];
// };

// const UserContext = React.createContext<TUserAuthenticationProps | null>(null);

// function createUserAuthenticationProvider() {
//   return function Provider(userProps: TUserAuthenticationProviderProps) {
//     const { children, ...props } = userProps;

//     const value: TUserAuthenticationProps = React.useMemo(
//       () => ({ ...props }),
//       [props]
//     );
//     return (
//       <UserContext.Provider value={value}>{children}</UserContext.Provider>
//     );
//   };
// }

// function useUserAuthenticationContext() {
//   const ctx = React.useContext<TUserAuthenticationProps | null>(UserContext);
//   if (!ctx) {
//     throw new Error("need provider");
//   }
//   return ctx;
// }

// const UserAuthenticationProvider = createUserAuthenticationProvider();

// export { UserAuthenticationProvider, useUserAuthenticationContext };

export const test = () => {}