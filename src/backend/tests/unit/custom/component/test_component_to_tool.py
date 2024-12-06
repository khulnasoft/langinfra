from collections.abc import Callable

from langinfra.base.agents.agent import DEFAULT_TOOLS_DESCRIPTION
from langinfra.components.agents.agent import AgentComponent
from langinfra.components.tools.calculator import CalculatorToolComponent


def test_component_to_toolkit():
    calculator_component = CalculatorToolComponent()
    agent_component = AgentComponent().set(tools=[calculator_component])

    tools = agent_component.to_toolkit()
    assert len(tools) == 1
    tool = tools[0]

    assert tool.name == "Agent"

    assert tool.description == DEFAULT_TOOLS_DESCRIPTION, tool.description

    assert isinstance(tool.coroutine, Callable)
    assert tool.args_schema is not None