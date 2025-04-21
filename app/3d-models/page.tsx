import { getAllModels } from "@/app/lib/models";
import type { Model } from "@/app/types";

export default async function ThreeDModelsPage() {
    const models = await getAllModels();

    return (
        <div>
            {models.map((model: Model) => {
                return <p key={model.id}>{model.name}</p>;
            })}
        </div>
    );
}
