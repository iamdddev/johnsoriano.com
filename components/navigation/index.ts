export { Navigation as default } from "./Navigation";
export { Navigation } from "./Navigation";

export interface NavigationProps {
    bordered?: boolean,
    branded?: boolean;
    links: {
        text: string;
        link: string;
    }[]
}