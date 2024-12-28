import { N as useToast } from './server.mjs';

function useMessages() {
  const toast = useToast();
  function showMessage(severity, summary, detail, life = 3e3) {
    toast.add({ severity, summary, detail, life });
  }
  function showSuccessMessage(summary, detail = summary, life = 3e3) {
    showMessage("success", summary, detail, life);
  }
  function showInfoMessage(summary, detail = summary, life = 3e3) {
    showMessage("info", summary, detail, life);
  }
  function showWarnMessage(summary, detail = summary, life = 3e3) {
    showMessage("warn", summary, detail, life);
  }
  function showErrorMessage(summary, detail = summary, life = 3e3) {
    showMessage("error", summary, detail, life);
  }
  return { showSuccessMessage, showInfoMessage, showWarnMessage, showErrorMessage };
}

export { useMessages as u };
