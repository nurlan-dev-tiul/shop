import { Api } from "@/services/api.client";
import { Components } from "@prisma/client"
import React from "react";
import { useSet } from "react-use";

interface ReturnProps {
  partsComponents: Components[];
  loading: boolean;
  selectedIds: Set<string>;
  onAddChecboxId: (id: string) => void;
}

// Этот хук нужен для получения данных запчастей
export const useFilterParts = (): ReturnProps => {

  const [partsComponents, setPartsComponents] = React.useState<Components[]>([]);
  const [loading, setLoading] = React.useState(false);

  // Здесь будут харниться id выбранных в чекбокс элементов
  // Toggle добавляет id в selectedIds, а если там уже есть такой id то удаляет
  const [selectedIds, { toggle }] = useSet(new Set<string>());
  
  React.useEffect(() => {
    async function getComponents() {
      try {
        setLoading(true)
        const components = await Api.components.getAll();
        setPartsComponents(components)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    }
    getComponents();
  }, [])

  
  return {
    partsComponents,
    loading,
    onAddChecboxId: toggle,
    selectedIds
  }

}