export const CustomTextArea = ({ label, useField, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className={props.class} htmlFor={props.id || props.name}></label>
      <textarea className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
