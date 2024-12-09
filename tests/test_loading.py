"""Unit tests for JSON loading functionality."""

import os

import pytest
from langinfra import load_flow_from_json  # Adjust the module import as needed


def test_loading():
    """Test loading JSON files from the examples directory."""
    for json_file in os.listdir("./examples"):
        if json_file.endswith(".json"):
            flow = load_flow_from_json(f"./examples/{json_file}", build=False)
            pytest.assume(flow is not None)
