
/*
 * @Description: 组件配置混入
 */

import ModeSelect from "@/components/ModeSelect";
import DecorateCtn from "@/components/Container/DecorateCtn";
import ModeSelectItem from "@/components/ModeSelect/ModeSelectItem";

export default {
    components: {
        ModeSelect,
        ModeSelectItem,
        DecorateCtn,
    },
    props: {
        attr: {
            type: Object,
            default: () => { }
        },
        style: {
            type: Object,
            default: () => { }
        },
        value: {
            type: Object,
            default: () => { }
        },
    },
}