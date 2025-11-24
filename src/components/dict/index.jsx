
'use strict'

export default props => {

    const { value, dict = [] } = props

    const getDictKeys = () => {
        if (!Array.isArray(dict) || dict.length === 0) {
            return { valueKey: null, labelKey: null }
        }

        const valueKey = dict[0]?.hasOwnProperty("value") ? "value" : "id";
        const labelKey = dict[0]?.hasOwnProperty("label") ? "label" : "name";

        return { valueKey, labelKey };
    }

    const renderContent = () => {
        const { valueKey, labelKey } = getDictKeys();
        if(!valueKey || !labelKey) return '-'
        
        const found = dict.find((item) => item?.[valueKey] === value);
        if (!found) return '-'

        return <span>{found?.[labelKey] || '-'}</span>;
    }

    return renderContent()
}