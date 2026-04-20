const meta = {
  title: 'Components/Radio'
}
 
export default meta
 
export const Default = {
  render: () => `
    <label>
      <input type="radio" name="lang">
      JavaScript
    </label>
  `
}
 
export const Checked = {
  render: () => `
    <label>
      <input type="radio" name="lang" checked>
      JavaScript
    </label>
  `
}
 
export const Disabled = {
  render: () => `
    <label>
      <input type="radio" name="lang" disabled>
      Disabled
    </label>
  `
}
 
export const Required = {
  render: () => `
    <label>
      <input type="radio" name="lang" required>
      JavaScript
    </label>
 
    <label>
      <input type="radio" name="lang">
      Python
    </label>
 
    <label>
      <input type="radio" name="lang">
      Java
    </label>
  `
}
 
export const Group = {
  render: () => `
    <label>
      <input type="radio" name="lang" value="js">
      JavaScript
    </label>
 
    <label>
      <input type="radio" name="lang" value="py">
      Python
    </label>
 
    <label>
      <input type="radio" name="lang" value="java">
      Java
    </label>
  `
}