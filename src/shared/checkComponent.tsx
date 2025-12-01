import {Label} from "@/shared/ui/label.tsx";
import {Checkbox} from "@/shared/ui/checkbox.tsx";

type CheckComponentPropsType = {
    name: string,
    slug: string,
    callBack: (name: string, value: any) => void,
    checked?: boolean,
    color?: string
}

export const CheckComponent = ({name, callBack, checked = false, slug, color}: CheckComponentPropsType) => {
    return (
        <Label
            className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-[#000000] has-[[aria-checked=true]]:bg-primary dark:has-[[aria-checked=true]]:border-gray-900 dark:has-[[aria-checked=true]]:bg-primary has-[[aria-checked=true]]:text-[#FFFFFF]">
            <Checkbox
                id="toggle-2"
                checked={checked}
                onCheckedChange={(value) => (callBack(slug, value))}
                className="data-[state=checked]:border-[#000000] data-[state=checked]:bg-[#FFFFFF] data-[state=checked]:text-black dark:data-[state=checked]:border-gray-700 dark:data-[state=checked]:bg-white"
                style={{
                    backgroundColor: checked ? color : undefined,
                    borderColor: checked ? color : undefined
                }}
            />
            {name}
        </Label>
    );
};
