export default function handleChange(event, props) {
    props.onChange({[event.currentTarget.name]: event.currentTarget.value});
}