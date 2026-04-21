
const meta = {
  title: 'Components/Dialog',
}
 
export default meta

 
export const ConfirmDialog = {
  render: () => `
    <dialog id="sure" data-intent="danger">
      <h2>Confirm Delete</h2>
      <p>Are you sureyou want to delete this item?</p>
      <p>This action cannot be undone</p> 
      <button onclick="this.closest('dialog').close()">Cancel</button>
      <button data-intent="danger" onclick="this.closest('dialog').close()">Delete</button>
    </dialog>
 
    <button onclick="this.previousElementSibling.showModal()">Delete Item</button>
  `
}
 
export const WarningDialog = {
  render: () => `
    <dialog id="warn" data-intent="warning">
      <h2>Warning</h2>
      <p>You have unsaved changes</p>
      
      <p>If you leave now , your progress will be lost</p>
 
      <button onclick="warn.close()">Close</button>
      <button onclick="warn.close()">Continue</button>
    </dialog>
 
    <button onclick="warn.showModal()">Open Warning</button>
  `
}
 
export const InfoDialog = {
  render: () => `
    <dialog id="info" data-intent="info">
      <h2>Info</h2>
      <p>Your session will expire in 2 minutes due to inactiity.</p>
      <p>Please save your work or continue to stay logged in</p>
 
      <button onclick="info.close()">Close</button>
      <button onclick="info.close()">Save</button>
    </dialog>
 
    <button onclick="info.showModal()">Open Info</button>
  `
}
 