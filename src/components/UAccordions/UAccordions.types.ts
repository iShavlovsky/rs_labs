export interface AccordionItem {
    title: string;
    text1: string;
    text2: string;
}

export interface AccordionProps {
    arr: AccordionItem[];
    initialOpenIndex?: number;
}
