import { createContext, useContext, useState } from "react";
import { apiGetAllCategorias } from "../api/apiCategorias";

const CategoriasContext = createContext();

export const useCategorias = () => useContext(CategoriasContext);

export const CategoriasProvider = ({ children }) => {
    const [categoriesOriginal, setCategoriesOriginal] = useState(null);
    const [loadingCategories, setLoadingCategories] = useState(false);

    const loadCategories = async () => {
        if (!categoriesOriginal && !loadingCategories) {
            try {
                setLoadingCategories(true);
                const response = await apiGetAllCategorias();
                setCategoriesOriginal(response);
            } catch (error) {
                console.error("Error loading categories:", error);
            } finally {
                setLoadingCategories(false);
            }
        }
    };

    return (
        <CategoriasContext.Provider
            value={{
                categoriesOriginal,
                setCategoriesOriginal,
                loadingCategories,
                loadCategories,
            }}
        >
            {children}
        </CategoriasContext.Provider>
    );
};
