import { HomeContainer, CountdownContainer, FormContainer, Separato, StartCountdownButton, TaskInput, MinutosAmountInput } from "./styles";

import { Play } from "@phosphor-icons/react";

export function Home() {
    return (
        <HomeContainer>
            <form>
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput
                        id="task"
                        type="text"
                        list="task-suggestions"
                        placeholder="Dê um nome para o seu projeto"
                    />

                    <datalist id="task-suggestions">
                        <option value="Projeto 1" />
                        <option value="Projeto 2" />
                    </datalist>

                    <label htmlFor="minutesAmount">durante</label>
                    <MinutosAmountInput
                        id="minutesAmount"
                        type="number"
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                    />

                    <span>minutos</span>
                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>

                    <Separato>:</Separato>

                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartCountdownButton
                    type="submit"
                    disabled
                >
                    <Play />
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}