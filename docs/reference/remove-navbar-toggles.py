#!/usr/bin/env python3
"""
Removes the toolbar icon components from the TekSure Navbar.

Components removed:
  - SeniorModeToggle  (person icon)
  - HighContrastToggle (contrast toggle)
  - FontSizeToggle    (A↑ text size)
  - DarkModeToggle    (moon icon)
  - LanguageToggle    (EN language)
  - SearchModal       (⌘K search)

Run from anywhere:
  python3 ~/Downloads/remove-navbar-toggles.py
"""

import re
import shutil
from pathlib import Path

NAVBAR_PATH = Path.home() / "Downloads" / "teksure" / "src" / "components" / "layout" / "Navbar.tsx"

COMPONENTS_TO_REMOVE = [
    "SeniorModeToggle",
    "HighContrastToggle",
    "FontSizeToggle",
    "DarkModeToggle",
    "LanguageToggle",
    "SearchModal",
]

def remove_import_line(lines, component):
    """Remove any import line that mentions this component."""
    return [l for l in lines if component not in l or not l.strip().startswith("import")]

def remove_jsx_tag(content, component):
    """Remove self-closing JSX tags like <Foo />, <Foo/>, <Foo prop="x" />."""
    # Remove self-closing with any props (multi-line safe)
    content = re.sub(
        rf'<{component}(\s[^>]*)?\s*/>', '', content, flags=re.DOTALL
    )
    # Remove open+close tags (e.g. <Foo></Foo>) — rare but safe to handle
    content = re.sub(
        rf'<{component}(\s[^>]*)?>.*?</{component}>', '', content, flags=re.DOTALL
    )
    return content

def clean_blank_lines(content, max_consecutive=2):
    """Collapse more than max_consecutive blank lines into max_consecutive."""
    result = re.sub(r'\n{3,}', '\n\n', content)
    return result

def main():
    if not NAVBAR_PATH.exists():
        print(f"ERROR: File not found: {NAVBAR_PATH}")
        print("Make sure your teksure project is at ~/Documents/Claude/Projects/TekSure")
        return

    # Backup
    backup = NAVBAR_PATH.with_suffix(".tsx.bak")
    shutil.copy(NAVBAR_PATH, backup)
    print(f"Backup saved to: {backup}")

    content = NAVBAR_PATH.read_text(encoding="utf-8")
    lines = content.splitlines(keepends=True)

    # Step 1: Remove import lines
    for comp in COMPONENTS_TO_REMOVE:
        before = len(lines)
        lines = remove_import_line(lines, comp)
        removed = before - len(lines)
        if removed:
            print(f"  Removed import: {comp}")

    content = "".join(lines)

    # Step 2: Remove JSX tags
    for comp in COMPONENTS_TO_REMOVE:
        before_len = len(content)
        content = remove_jsx_tag(content, comp)
        if len(content) != before_len:
            print(f"  Removed JSX: <{comp} />")

    # Step 3: Clean up extra blank lines
    content = clean_blank_lines(content)

    NAVBAR_PATH.write_text(content, encoding="utf-8")
    print(f"\nDone! Navbar saved to: {NAVBAR_PATH}")
    print("Review the file, then run: cd ~/Documents/Claude/Projects/TekSure && git diff src/components/layout/Navbar.tsx")

if __name__ == "__main__":
    main()
