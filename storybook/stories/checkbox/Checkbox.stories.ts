const meta = {
    title: 'Components/Checkbox'
}

export default meta

export const Default = {
    render: () => `
    <label>
        <input type="checkbox">
            Accept terms
    </label>
    `
}

export const Checked = {
    render: () => `
    <label>
        <input type="checkbox" checked>
            Accepted
    </label>
    `
}

export const Disabled = {
    render: () => `
    <label>
        <input type="checkbox" disabled>
            Disabled
    </label>
    `
}

export const Required = {
    render: () => `
    <label>
        <input type="checkbox" required>
            Required field
    </label>
    `
}

export const Group = {
  render: () => `
    <label>
      <input type="checkbox" name="lang" value="js">
      JavaScript
    </label>
    <label>
      <input type="checkbox" name="lang" value="py">
      Python
    </label>
    <label>
      <input type="checkbox" name="lang" value="java">
      Java
    </label>
  `
}
 