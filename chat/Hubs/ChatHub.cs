using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

public class ChatHub : Hub
{
    public async Task SendMessage(string username, string message)
    {
        await this.Clients.All.SendAsync("ReceiveMessage", username, message);
    }

    public async Task GetDate()
    {
        var message = DateTime.Now.ToString();
        await this.Clients.Caller.SendAsync("ReceiveDate", message);
    }

    public async Task MemberJoined()
    {
        var message = "A new member has joined the chat!";
        await this.Clients.Others.SendAsync("ReceiveMemberJoined", message);
    }
}