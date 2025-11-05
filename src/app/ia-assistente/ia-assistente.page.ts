import { Component } from '@angular/core';

@Component({
  selector: 'app-ia-assistente',
  templateUrl: './ia-assistente.page.html',
  styleUrls: ['./ia-assistente.page.scss'],
  standalone: false  // 🔹 adiciona isso aqui
})
export class IaAssistentePage {
  userEmail = 'usuario@solosmart.com';
  userMessage = '';
  messages = [
    { sender: 'ia', text: 'Olá 👋 Sou a IA SoloSmart. Como posso ajudar hoje?' },
  ];

  sendMessage() {
    const text = this.userMessage.trim();
    if (!text) return;

    this.messages.push({ sender: 'user', text });
    this.userMessage = '';

    setTimeout(() => {
      this.messages.push({
        sender: 'ia',
        text: this.gerarRespostaSimulada(text),
      });
    }, 600);
  }

  gerarRespostaSimulada(pergunta: string): string {
    const p = pergunta.toLowerCase();
    if (p.includes('umidade'))
      return 'A umidade do solo está em 58%, dentro da faixa ideal 💧';
    if (p.includes('temperatura'))
      return 'A temperatura atual é de 23°C, perfeita para o cultivo 🌤️';
    if (p.includes('irrigação'))
      return 'A irrigação foi executada há 2 horas. Próxima em 4 horas. 🚿';
    return 'Estou analisando os dados da sua plantação... tudo parece estável 🌱';
  }
}
