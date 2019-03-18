export default function  handleChange(event, props) {
    let change = {};

    change[event.currentTarget.name] = event.currentTarget.value;
    props.onChange(change);
}