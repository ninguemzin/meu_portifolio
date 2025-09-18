module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "init", // 🎉 commit inicial
        "feat", // ✨ novo recurso
        "fix", // 🐛 correção
        "docs", // 📚 documentação
        "style", // 💄 estilos
        "refactor", // ♻️ refatoração
        "perf", // ⚡ performance
        "test", // 🧪 testes
        "build", // 📦 build / dependências
        "ci", // 🧱 integração contínua
        "chore", // 🔧 tarefas
        "cleanup", // 🧹 limpeza
        "remove", // 🗑️ remoção
        "raw", // 🗃️ dados/config
      ],
    ],
    "subject-case": [0, "never", []], // permite emojis e letras maiúsculas/minúsculas
    "header-max-length": [0, "always", 100], // opcional: permite headers maiores
  },
};
