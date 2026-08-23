from pathlib import Path

import streamlit as st
import streamlit.components.v1 as components


ROOT = Path(__file__).parent

st.set_page_config(page_title="漢検2級トレーニング", page_icon="漢", layout="centered")


def build_html():
    html = (ROOT / "index.html").read_text(encoding="utf-8")
    css = (ROOT / "styles.css").read_text(encoding="utf-8")
    questions = (ROOT / "questions.js").read_text(encoding="utf-8")
    app = (ROOT / "app.js").read_text(encoding="utf-8")
    html = html.replace('<link rel="stylesheet" href="styles.css">', f"<style>{css}</style>")
    html = html.replace('<script src="questions.js"></script>', f"<script>{questions}</script>")
    html = html.replace('<script src="app.js"></script>', f"<script>{app}</script>")
    html = html.replace("if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));", "")
    return html


components.html(build_html(), height=900, scrolling=True)