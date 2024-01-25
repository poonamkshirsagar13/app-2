export interface Menu {
    label: string;
    path: string;
    id: string;
    isActive: boolean;
    enable: boolean;
    visible:boolean;
    icon:string;
    children?: Menu[];
}

export const getMenuModel= (menuItem: any): Menu => {
    return {
        ...menuItem
    }
}