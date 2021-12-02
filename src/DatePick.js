export const DatePick = ({
  label,
  useField,
  field: Field,
  datePicker: DatePicker,
  ...props
}) => {
  return (
    <Field name={props.name}>
      {({ field, meta, form: { setFieldValue } }) => {
        return (
          <div className={props.styleClass}>
            <label htmlFor={props.formLabel}>{props.formLabel}</label>
            <DatePicker
              {...field}
              placeholderText="Click to select a date"
              selected={field.value || null}
              onChange={(val) => {
                setFieldValue(field.name, val);
              }}
            />
            {meta.touched && meta.error ? (
              <div className="error">{meta.error}</div>
            ) : null}
          </div>
        );
      }}
    </Field>
  );
};
