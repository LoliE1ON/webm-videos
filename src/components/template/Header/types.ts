export interface IHeaderProps {
    classes: {
        root: string,
        menuButton: string,
        title: string,
        drawer: string,
        drawerPaper:string,
        drawerHeader: string
    };
    toggleTheme: (theme: string) => void;

}