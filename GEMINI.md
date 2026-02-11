# Gemini.md - Advanced Engineering & Internationalization (i18n)

## 🎯 Core Objective
Build high-performance, modular software that is strictly separated into Logic, Data, and Content (Language), ensuring scalability and ease of maintenance.

---

## 🌍 1. Multi-language & Localization (i18n/L10n) Standards
**Strict Rule: NEVER hardcode display strings in the logic.**

1.  **Separation of Concerns:** All user-facing text (logs, print statements, UI labels) must be extracted to a separate configuration or dictionary.
2.  **Implementation Pattern:**
    - Create a distinct dictionary or JSON structure for languages (e.g., `locales/en.json`, `locales/th.json`).
    - Use keys to access text.
    - **Bad:** `print("Error: Database not found")`
    - **Good:** `print(lang[current_lang]['err_db_not_found'])` or `print(t('err_db_not_found'))`
3.  **Unicode Support:** Ensure all file handling explicitly uses `encoding='utf-8'`.

## 🛠 2. Code Quality & Refactoring Guidelines
1.  **Descriptive Naming:** Variable names must imply their purpose and type.
    - `u` -> `user_obj`
    - `list` -> `product_list`
    - `func()` -> `calculate_total_revenue()`
2.  **Function Purity:** Aim for Pure Functions where possible (output depends only on input, no side effects).
3.  **Cyclomatic Complexity:** Keep logic simple. If you see deep nesting (`if` inside `for` inside `if`), suggest refactoring into a sub-function.
4.  **Constants:** Use `UPPER_CASE` variables for configuration values (e.g., `MAX_RETRIES = 5`) at the top of the file.

## 🐍 3. Python Specifics
1.  **Type Hinting:** Mandatory. Use `typing.List`, `typing.Dict`, `typing.Optional` etc.
2.  **Docstrings:** Use Google-style docstrings for complex functions.
3.  **f-strings:** Use f-strings for string interpolation (except SQL queries).

## 🤖 Interaction Workflow
- When asked to **"Add Language Support"**: Refactor the code to create a simple `LanguageManager` class or dictionary system.
- When asked to **"Improve Code"**: Look for hardcoded values, complex loops, and lack of error handling.